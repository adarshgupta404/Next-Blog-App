// import { sql } from "@vercel/postgres";

// export default async function handler(request, response) {
//   try {
//     const tags = [
//       "protech",
//       "latest",
//       "legal",
//       "decor",
//       "investment",
//       "regional",
//     ];
//     const updates = [
//       "Protech",
//       "Latest",
//       "Legal",
//       "Decor",
//       "Investment",
//       "Regional",
//     ];

//     // Function to select a random value from an array
//     function getRandomValueFromArray(array) {
//       const randomIndex = Math.floor(Math.random() * array.length);
//       return array[randomIndex];
//     }

//     // Generate a sentence with random values
//     const randomTag = getRandomValueFromArray(tags);
//     const result = await sql`
//       UPDATE "posts"
//       SET "tags" = ${randomTag}
//       WHERE "id" IN (1);
//     `;
//     const posts = result.rows;
//     const data = posts;
//     // console.log(data);
//     return response.status(200).json(data);
//   } catch (error) {
//     return response.status(500).json({ error });
//   }
// }
