#!/bin/sh

echo "Aguardando PostgreSQL..."

until php -r "
try {
    new PDO(
        'pgsql:host=' . getenv('DB_HOST') .
        ';port=' . getenv('DB_PORT') .
        ';dbname=' . getenv('DB_DATABASE'),
        getenv('DB_USERNAME'),
        getenv('DB_PASSWORD')
    );
    exit(0);
} catch (Exception \$e) {
    exit(1);
}
"; do
    sleep 2
done

echo "Banco disponível"

if ! grep -q "APP_KEY=" .env || [ -z "$(grep APP_KEY= .env | cut -d= -f2)" ]; then
    php artisan key:generate --force
fi

php artisan config:cache

php artisan route:cache

php artisan migrate --force

php artisan serve --host=0.0.0.0 --port=8000