exports.index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    tagline: 'Where your next adventure begins',
    nav: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' }
    ]
  });
};
