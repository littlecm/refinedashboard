"use client";

import { Stack, Typography } from "@mui/material";
import { BLOG_POSTS_QUERY } from "@queries/blog-posts";
import { useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export default function BlogPostShow() {
  const { queryResult } = useShow({
    meta: {
      fields: BLOG_POSTS_QUERY,
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

        <Typography variant="body1" fontWeight="bold">
          {"Content"}
        </Typography>
        <MarkdownField value={record?.content} />

        <Typography variant="body1" fontWeight="bold">
          {"Category"}
        </Typography>
        <div>{record?.category?.title}</div>
        <Typography variant="body1" fontWeight="bold">
          {"Status"}
        </Typography>
        <TextField value={record?.status} />

        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.created_at} />
      </Stack>
    </Show>
  );
}
