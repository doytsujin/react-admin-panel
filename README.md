# react-admin-panel

Simple Admin Panel with Laravel + React + CSS Grids

# Installation

1. Check out the latest release from GitHub:

```    
    git clone https://github.com/kambur-andriy/react-admin-panel.git
```    
    
2. Configure a Web Server:

    Example configuration for Apache
    
    * Add VirtualHost for new domain
    
    ```        
        <VirtualHost *:80>
            ServerName react-admin-panel.com
            DocumentRoot /var/www/html/react-admin-panel/public
        
            <Directory /var/www/html/react-admin-panel/public>
                DirectoryIndex index.php
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
            </Directory>
        
            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined
        </VirtualHost>
    ```

    * Reload Apache Server
    
    ```        
        service apache2 reload
    ```        
           
3. Configure Laravel project

    * Go to project folder
    
    * Rename .env.example to .env
   
    * Install PHP libraries

    ```        
        composer install
    ```        
    
    * Install JavaScript libraries

    ```        
        npm install
    ```
            
    * Generate new project key
    
    ```        
        php artisan key:generate
    ```        
    
# Usage

This application is an example of simple Admin Panel.
Use

        npm run development -- --watch

during a development process, and 

        npm run production
        
to build a production version.
