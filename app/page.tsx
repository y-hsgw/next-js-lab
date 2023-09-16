import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Main Page",
};

export default function Home() {
  return (
    <main>
      <Typography variant="h3" component="h1">
        Main Page
      </Typography>
      <Stack component="nav">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/request-cache">Request</Link>
      </Stack>
    </main>
  );
}
