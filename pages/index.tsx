import { Container, Typography, Paper } from "@mui/material";
import Image from "next/image";
import Head from "next/head";

import nameBanner from "../public/Luke Harding.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luke Harding - Home</title>
      </Head>
      <Container>
        <header style={{ padding: "1rem" }}>
          <Image src={nameBanner} alt="Luke Harding" />
        </header>
        <main>
          <Paper elevation={3} className="section">
            <Typography variant="h2">About Me</Typography>
          </Paper>
        </main>
      </Container>
    </>
  );
}
