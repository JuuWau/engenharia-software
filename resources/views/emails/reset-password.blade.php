<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redefinição de Senha</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            display: inline-block;
            background: #4f46e5;
            color: white;
            padding: 12px 20px;
            border-radius: 12px;
            font-weight: bold;
            font-size: 24px;
        }
        h1 {
            color: #1e293b;
            font-size: 24px;
            margin-bottom: 20px;
        }
        p {
            color: #475569;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            background: #4f46e5;
            color: white;
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            margin: 20px 0;
        }
        .button:hover {
            background: #4338ca;
        }
        .warning {
            background: #fef2f2;
            border-left: 4px solid #ef4444;
            padding: 12px 16px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .warning p {
            color: #991b1b;
            margin: 0;
            font-size: 14px;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #94a3b8;
            font-size: 14px;
            text-align: center;
        }
        .subcopy {
            margin-top: 20px;
            padding: 15px;
            background: #f1f5f9;
            border-radius: 8px;
            font-size: 13px;
            color: #64748b;
            word-break: break-all;
        }
        .emoji {
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">

        <h1>Olá, {{ $name }}! 👋</h1>

        <p>Recebemos uma solicitação para redefinir a senha da sua conta no <strong>Safe Voice</strong>.</p>

        <p>Clique no botão abaixo para criar uma nova senha:</p>

        <div style="text-align: center;">
            <a href="{{ $url }}" class="button">
                Redefinir Senha
            </a>
        </div>

        <p style="font-size: 14px; color: #94a3b8;">
            Este link de redefinição expira em 60 minutos.
        </p>

        <div class="warning">
            <p>⚠️ <strong>Importante:</strong> Se você não solicitou esta alteração, ignore este e-mail e sua senha permanecerá segura.</p>
        </div>

        <p>🔒 Sua segurança é nossa prioridade.</p>

        <div class="subcopy">
            <p style="margin: 0; font-weight: bold;">🔗 Link direto:</p>
            <a href="{{ $url }}" style="color: #4f46e5; text-decoration: underline; word-break: break-all;">
                {{ $url }}
            </a>
        </div>

        <div class="footer">
            <p>Atenciosamente,<br><strong>Equipe Safe Voice</strong></p>
            <p style="font-size: 12px; color: #cbd5e1;">
                Em caso de dúvidas: suporte@safevoice.com<br>
                Em caso de emergência: 190 | Central da Mulher: 180
            </p>
        </div>
    </div>
</body>
</html>