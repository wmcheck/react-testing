# GIT
## Правила именования веток
🔹 feature/    — для новой функциональности
   feature/add-search
   feature/user-profile

🔹 bugfix/     — для исправления багов
   bugfix/fix-login-error
   bugfix/header-overlap

🔹 hotfix/     — срочные исправления
   hotfix/critical-security

🔹 release/    — для подготовки релиза
   release/v1.2.0

🔹 docs/       — для документации
   docs/update-readme


## Сценарий 1: Создать ветку для новой фичи

### Начинаем с чистого main
git checkout main
git pull origin main

### Создаем ветку
git checkout -b feature/user-authentication

### Работаем...
git add .
git commit -m "Add authentication logic"
git push -u origin feature/user-authentication

## Сценарий 2: Создать ветку от другой ветки (не от main)

### Если нужно продолжить работу от feature/A
git checkout feature/A
git pull origin feature/A
git checkout -b feature/B

## Сценарий 3: Ветка от определенного коммита

### Посмотреть историю коммитов
git log --oneline

### Создать ветку от конкретного коммита
git checkout -b fix-branch a1b2c3d