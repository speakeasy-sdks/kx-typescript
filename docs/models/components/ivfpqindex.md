# IVFPQIndex


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [components.IVFPQIndexType](../../models/components/ivfpqindextype.md) | :heavy_check_mark:                                                     | Type of the index.                                                     |
| `metric`                                                               | [components.DistanceMetric](../../models/components/distancemetric.md) | :heavy_check_mark:                                                     | Distance metric.                                                       |
| `nclusters`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | Number of cells to create (aka clusters, partitions, nlists)           |
| `nsplits`                                                              | *number*                                                               | :heavy_minus_sign:                                                     | Number of splits.                                                      |
| `nbits`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Number of bits.                                                        |
| `trainingVectors`                                                      | *number*                                                               | :heavy_check_mark:                                                     | Number of vectors supplied for training in initial batches             |