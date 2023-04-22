FROM node:19-slim

RUN apt update && apt install -y --no-install-recommends \
    default-jre \
    git \
    zsh \
    curl \
    wget \
    fonts-powerline \
    nano


COPY ./.docker/local/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

WORKDIR /home/node/app

USER node

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t https://github.com/romkatv/powerlevel10k.git \
    -p git \
    -p https://github.com/zdharma-continuum/fast-syntax-highlighting \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -a 'export TERM=xterm-256color'

RUN echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc
RUN echo 'HISTFILE=/home/node/zsh/.zsh_history' >> ~/.zshrc
RUN echo 'if test -t 1; then exec zsh; fi' >> ~/.bashrc

CMD ["tail", "-f", "/dev/null"]
