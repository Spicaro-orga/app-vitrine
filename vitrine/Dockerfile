FROM  nginxinc/nginx-unprivileged:1.27.3-alpine3.20-slim

# Nginx config
USER root
RUN rm -rf /etc/nginx/conf.d
COPY --chown=nginx:nginx conf/ /etc/nginx
# Ensure nginx user owns the directory
RUN chown -R nginx:nginx /usr/share/nginx/html
USER nginx
# Copy static build
COPY --chown=nginx:nginx dist/. /usr/share/nginx/html/

EXPOSE 8080
USER nginx
HEALTHCHECK NONE
# Start Nginx server
CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]

