#!/usr/bin/env bash

hugo serve \
    --liveReloadPort=80 \
    --bind=:: \
    --baseURL=http://johncs.local \
    --appendPort=false
