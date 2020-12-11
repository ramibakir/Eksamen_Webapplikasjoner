import { emailService, userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { sendMail } from '../utils/sendEmail.js';

export const list = catchAsyncErrors(async (req, res, next) => {
  const emails = await emailService.listEmails();
  res.status(200).json({ success: true, data: emails });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const email = await emailService.createEmail(req.body);
  const user = await userService.getUserById(req.body.from);
  try {
    await sendMail({
      email: user.email,
      subject: `Ny  mail fra ${user.email}`,
      message: req.body.content,
    });
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({ success: true, data: email });
});
