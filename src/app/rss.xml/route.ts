import { NextResponse } from "next/server";
import { Feed } from "feed";
import postMetadata from "../posts/postMetadata";
import allProjects from "../mini-projects/allProjects";

const baseUrl = "https://johncs.com";

export async function GET() {
    const feed = new Feed({
        title: "johncs.com",
        description: "John Sullivan's blog posts, projects, and other content.",
        id: baseUrl,
        link: baseUrl,
        language: "en",
        favicon: new URL("/favicon.ico", baseUrl).toString(),
        copyright: `All rights reserved 2024, John Sullivan`,
    });

    const allItems = [
        ...postMetadata.map(({ post }) => ({
            title: post.title,
            link: new URL(post.href, baseUrl).toString(),
            description: post.description,
            date: new Date(post.date),
            type: "post",
        })),
        ...allProjects.map((project) => ({
            title: project.metadata.title,
            link: project.metadata.url,
            date: new Date(project.metadata.date),
            type: "project",
        })),
    ].sort((a, b) => b.date.getTime() - a.date.getTime());

    allItems.forEach((item) => {
        feed.addItem({
            title: item.title,
            id: item.link,
            link: item.link,
            date: item.date,
            category: [{ name: item.type }],
        });
    });

    const rss = feed.rss2();

    return new NextResponse(rss, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
