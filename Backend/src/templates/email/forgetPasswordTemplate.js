export const resetPasswordEmailTemplate = (resetUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset your password</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#111827; padding:24px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">
                Reset your password
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:32px; color:#333333;">
              <p style="font-size:16px; line-height:1.5; margin-top:0;">
                We received a request to reset your password.
              </p>

              <p style="font-size:16px; line-height:1.5;">
                Click the button below to create a new password for your account.
              </p>

              <!-- Button -->
              <div style="text-align:center; margin:32px 0;">
                <a href="${resetUrl}"
                   style="
                     background:#dc2626;
                     color:#ffffff;
                     text-decoration:none;
                     padding:14px 28px;
                     border-radius:6px;
                     font-size:16px;
                     display:inline-block;
                   ">
                  Reset Password
                </a>
              </div>

              <p style="font-size:14px; color:#666;">
                If the button doesn’t work, copy and paste this link into your browser:
              </p>

              <p style="font-size:14px; word-break:break-all;">
                <a href="${resetUrl}" style="color:#dc2626;">
                  ${resetUrl}
                </a>
              </p>

              <p style="font-size:14px; color:#666; margin-top:32px;">
                This link will expire in 15 minutes.
              </p>

              <p style="font-size:14px; color:#666;">
                If you didn’t request a password reset, please ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb; padding:16px; text-align:center; font-size:12px; color:#888;">
              © ${new Date().getFullYear()} Your Company. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;
