# HNSWIndex


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [components.HNSWIndexType](../../models/components/hnswindextype.md)   | :heavy_check_mark:                                                     | Type of the index.                                                     |
| `metric`                                                               | [components.DistanceMetric](../../models/components/distancemetric.md) | :heavy_check_mark:                                                     | Distance metric.                                                       |
| `dims`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | Number of dimensions.                                                  |
| `efConstruction`                                                       | *number*                                                               | :heavy_minus_sign:                                                     | Entry points explored during construction.                             |
| `m`                                                                    | *number*                                                               | :heavy_minus_sign:                                                     | Number of connections per vertex.                                      |