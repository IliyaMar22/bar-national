export default function handler(req, res) {
  // Redirect to the static PDF file
  res.redirect(302, '/menu.pdf');
}
