// // app/api/dogs/[id]/route.js
export const dogs = [
  {
    id: 1,
    name: "Boomer",
    breed: "Rottweiler",
    age: 2,
    image: "/dog1.jpeg",
    status: "Available",
    shelter: "Happy Paws Shelter, Delhi",
    size: "large",
    energy: "high",
  },
  {
    id: 2,
    name: "Ghost",
    breed: "German Shepherd",
    age: 2,
    image: "/dog2.jpeg",
    status: "Adopted",
    shelter: "Safe Haven Dogs, Mumbai",
    size: "large",
    energy: "high",
  },
  {
    id: 3,
    name: "Lailaa",
    breed: "Golden Retriever",
    age: 3,
    image: "/dog3.jpeg",
    size: "large",
    energy: "medium",
  },
  {
    id: 4,
    name: "Whiskey",
    breed: "Siberian Husky",
    age: 3,
    image: "/dog4.jpeg",
    size: "large",
    energy: "high",
  },
  {
    id: 5,
    name: "Poppins",
    breed: "Pomeranian",
    age: 2,
    image: "/dog5.png",
    size: "small",
    energy: "medium",
  },
  {
    id: 6,
    name: "Daisy",
    breed: "Pomeranian",
    age: 2.5,
    image: "/dog6.jpeg",
    size: "small",
    energy: "medium",
  },
  {
    id: 7,
    name: "Boogey",
    breed: "Labrador Retriever",
    age: 4,
    image: "/dog7.jpeg",
    size: "large",
    energy: "medium",
  },
  {
    id: 8,
    name: "Wendy",
    breed: "Mixed",
    age: 3,
    image: "/dog8.jpeg",
    size: "medium",
    energy: "low",
  },
  {
    id: 9,
    name: "Casey",
    breed: "Golden Retriever",
    age: 3,
    image: "/dog9.jpeg",
    size: "large",
    energy: "medium",
  },
  {
    id: 10,
    name: "Unknown",
    breed: "Mixed",
    age: 1,
    image: "/dog10.jpeg",
    size: "small",
    energy: "high",
  },
  {
    id: 11,
    name: "Peepee",
    breed: "Mixed",
    age: 0.5,
    image: "/dog11.jpeg",
    size: "small",
    energy: "high",
  },
  {
    id: 12,
    name: "Oscar",
    breed: "Mixed",
    age: 3,
    image: "/dog12.jpeg",
    size: "medium",
    energy: "low",
  },
  {
    id: 13,
    name: "Jackie Chan",
    breed: "Indie",
    age: 1,
    size: "medium",
    energy: "high",
    shelter: "Home for wings and tails foundation, Greater Noida, Utttar Pradesh",
    image: "/dog13.jpeg"

  }
  
];


  
export async function GET(request, { params }) {
  const { id } = params; // id is a string

  const dog = dogs.find((dog) => dog.id === Number(id)); // compare number to number

  if (!dog) {
    return new Response("Dog not found", { status: 404 });
  }

  return Response.json(dog);
}


