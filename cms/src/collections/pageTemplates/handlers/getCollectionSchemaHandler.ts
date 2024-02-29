export default async function getCollectionSchemaHandler(req, res) {
  const collection = req.params.collection
  if (!collection) {
    return res.status(404).json({
      error: 'No collection specified',
    })
  }
  console.log(req.payload.collections)
  res.json({
    fields: req.payload.collections[collection]?.config?.fields
  })
}