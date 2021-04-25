import createMarko from './create.marko'

export default (req, res) => {
  res.marko(createMarko, {})
}
