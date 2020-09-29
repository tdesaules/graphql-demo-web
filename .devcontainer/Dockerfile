FROM alpine:3.11

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

COPY setup.sh /tmp/setup.sh

RUN apk update \
&& apk add --no-cache wget coreutils ca-certificates \
&& /bin/ash /tmp/setup.sh "$USERNAME" "$USER_UID" "$USER_GID" \
&& apk add --no-cache nodejs=12.15.0-r1 npm=12.15.0-r1 \
&& rm /tmp/setup.sh