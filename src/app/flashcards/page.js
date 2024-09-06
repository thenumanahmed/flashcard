"use client";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";

import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { db } from "../firebase";

export default function Flashcards() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        setFlashcards(collections);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcards();
  }, [user, isSignedIn]);

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

  if (!isLoaded) return <>Loading...</>;
  if (!isSignedIn) return <>Login Please</>;

  return (
    <Container maxWidth="100vw">
      <Typography>Flashcards</Typography>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea
                  onClick={() => handleCardClick(id)}
                ></CardActionArea>
                <CardContent>
                  <Typography variant="h6">{flashcard.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
