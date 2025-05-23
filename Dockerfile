FROM nginx:alpine

# 將本機的靜態網站內容複製到容器內 Nginx 預設的網站目錄
COPY ./dist /usr/share/nginx/html

# 可選：覆蓋預設的 Nginx 設定（例如支援 SPA）
# COPY ./nginx.conf /etc/nginx/nginx.conf

# 容器啟動後由 Nginx 處理
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
