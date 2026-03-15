import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "zmklohac",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skFH319YVbmQUYL0c8kZre8fs2pA24JyoAhUaL5V1wLlmFXWsCEpaenB7xkThMYh80lspIdEiq9kDEhFLmYR9ah2lHLr5nuNrtMudBqZnPrF8yJEm9K7DayDUe8E3mq49QstJTtupfFzSYfiaanYuDOv0ye1SqmDGRlioxB5leEWLfYBMVNA",
  useCdn: false,
});

