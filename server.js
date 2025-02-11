//creating signup endpoint with usernaame email password  and date of birth
app.post('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;
   
    User.findOne({ username: username }, (err, user) => {
       if (err) { 
         return res.status(500).json({ error: 'Server Error' });
         }
         if (user) { 
         return res.status(400).json({ error: 'Username cannot be  empty' });
         }
         const newUser = new User({ username, email, password, dateOfBirth });
         newUser.save((err, user) => {
            if (err) { 
              return res.status(500).json({ error: 'Server Error' });
              }
              res.json({ message: 'User registered successfully' });
            });
    });
});
app.post('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;
    if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: 'Password length should be above 8 characters and below 16 characters' });
    }
    if (!email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }
    // if error in email print email cannot be empty
    if (!email) {
        return res.status(400).json({ error: 'Email cannot be empty' });
    }
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Server Error' });
            }
        if (user) {
            return res.status(400).json({ error: 'Email already exists' });
            } 
    
            const newUser = new User({ username, email, password, dateOfBirth });
            newUser.save((err, user) => {
                if (err) {
                    return res.status(500).json({ error: 'Server Error' });
                    }
                res.json({ message: 'User registered successfully' });
                });
        });
        });
        





    
         





        
