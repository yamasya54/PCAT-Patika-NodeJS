const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB bağlantısı başarılı.');
})
.catch(err => {
  console.error('MongoDB bağlantı hatası:', err);
});




const PhotoSchema = new Schema({
  title: String,
  description: String,
})
const Photo = mongoose.model('Photo', PhotoSchema);
Photo.create({
  title: 'Photo Title 1',
  description: 'Photo description 1 lorem ipsum',
});