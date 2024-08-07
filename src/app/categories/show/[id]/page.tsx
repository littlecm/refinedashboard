"use client";

import { Stack, Typography } from "@mui/material";
import { CATEGORIES_QUERY } from "@queries/categories";
import { useShow } from "@refinedev/core";
import { Show, TextFieldComponent as TextField } from "@refinedev/mui";

export default function CategoryShow() {
  const { queryResult } = useShow({
    meta: {
      fields: CATEGORIES_QUERY,
    },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.id} />
        <Typography variant="body1" fontWeight="bold">
          {"Title"}
        </Typography>
        <TextField value={record?.title} />
      </Stack>
    </Show>
  );
}
