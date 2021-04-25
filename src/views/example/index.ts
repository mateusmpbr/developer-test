import exampleMarko from './example.marko'

export default (req, res) => {
  res.marko(exampleMarko, {})
}
