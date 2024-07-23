# IVFIndex


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [components.IVFIndexType](../../models/components/ivfindextype.md)     | :heavy_check_mark:                                                     | Type of the index.                                                     |
| `metric`                                                               | [components.DistanceMetric](../../models/components/distancemetric.md) | :heavy_check_mark:                                                     | Distance metric.                                                       |
| `nclusters`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | Number of cells to create (aka clusters, partitions, nlists)           |
| `trainingVectors`                                                      | *number*                                                               | :heavy_check_mark:                                                     | Number of vectors supplied for training in initial batches             |