
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendOrderConfirmation = async (to, order) => {
  const itemsList = order.items.map(item => 
    `<li>${item.quantity}x ${item.product.name}</li>`
  ).join('');

  const html = `
    <h2>Thank you for your order!</h2>
    <p>Your order total is <strong>$${order.total.toFixed(2)}</strong>.</p>
    <p>Items:</p>
    <ul>${itemsList}</ul>
  `;

  await transporter.sendMail({
    from: `"Coffee Shop" <${process.env.SMTP_USER}>`,
    to,
    subject: "Your Coffee Shop Order Confirmation",
    html
  });
};
