# 打包前后台静态资源
FROM node:20-alpine3.17 AS BUILD
WORKDIR /app/front
COPY gin-blog-front .
RUN npm config set registry https://registry.npmmirror.com \
    && npm install -g pnpm \ 
    && pnpm install \ 
    && pnpm build

WORKDIR /app/admin
COPY gin-blog-admin .
RUN pnpm install \ 
    && pnpm build

# 部署 Nginx
FROM nginx:1.25.3-alpine

# 从第一个阶段拷贝构建好的静态资源到容器
COPY --from=BUILD /app/front/dist /usr/share/nginx/html
COPY --from=BUILD /app/admin/dist /usr/share/nginx/html/admin

# 将 Nginx 配置文件模板拷到容器中
COPY deploy/build/web/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY deploy/build/web/default.conf.ssl.template /etc/nginx/conf.d/default.conf.ssl.template
# 初始化脚本, 根据环境变量和模板生成 Nginx 配置文件
COPY deploy/build/web/run.sh /docker-entrypoint.sh
RUN chmod a+x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD [ "nginx", "-g", "daemon off;" ]

EXPOSE 80
EXPOSE 443