const event = require('../models/event');

exports.createevent = (req, res) => {
  const event = new event({
    personalInfo: req.body.personalInfo,
    experience: req.body.experience,
    skills: req.body.skills,
    about: req.body.about
  });
  
  
  event.save().then(() => {
    res.status(201).json({ message: 'event created!' });
  }).catch((error) => {
    res.status(400).json({ error });
  });
};

exports.getevent = (req, res) => {
  event.findById(req.params.id).then((event) => {
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: 'event not found' });
    }
  }).catch((error) => {
    res.status(500).json({ error });
  });
};

exports.updateevent = (req, res) => {
  const event = new event({
    _id: req.params.id,
    personalInfo: req.body.personalInfo,
    experience: req.body.experience,
    skills: req.body.skills,
    about: req.body.about
  });
  event.updateOne({ _id: req.params.id }, event).then(() => {
    res.status(200).json({ message: 'event updated!' });
  }).catch((error) => {
    res.status(400).json({ error });
  });
};

exports.deleteevent = (req, res) => {
  event.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({ message : 'event deleted!' })
 }).catch((error) => {
        res.status(400).json({ error });
        });
        };
