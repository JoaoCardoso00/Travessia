import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth, firestore } from "@/lib/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { randomUUID } from "crypto";

export const CreateExperienciaDto = z.object({
  id: z.string().nonempty().optional(),
  name: z.string().nonempty(),
  price: z.number().positive().int(),
  tag: z.array(z.string()).nonempty(),
  description: z.string().nonempty(),
  owner_id: z.string().nonempty(),
  sells: z.number().int().default(0),
  imageSrc: z
    .string()
    .optional()
    .default(
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
    ),
  imageAlt: z
    .string()
    .optional()
    .default(
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
    ),
});

export type Experiencia = z.infer<typeof CreateExperienciaDto>;

export const EXPERIENCIAS: z.infer<typeof CreateExperienciaDto>[] = [
  {
    id: randomUUID(),
    name: "Experiencia 1",
    price: 100,
    tag: ["tag1", "tag2"],
    description: "Descrição da experiência 1",
    owner_id: "eTcFu5lDpWRjbBImYRaxkdlb5bs1",
    sells: 10,
    imageSrc:
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
    imageAlt:
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
  },
  {
    id: randomUUID(),
    name: "Experiencia 2",
    price: 200,
    sells: 20,
    tag: ["tag1", "tag2"],
    description: "Descrição da experiência 2",
    owner_id: "eTcFu5lDpWRjbBImYRaxkdlb5bs1",
    imageSrc:
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
    imageAlt:
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
  },
  {
    id: randomUUID(),
    name: "Experiencia 3",
    price: 300,
    sells: 20,
    tag: ["tag1", "tag2"],
    description: "Descrição da experiência 3",
    owner_id: "eTcFu5lDpWRjbBImYRaxkdlb5bs1",
    imageSrc:
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
    imageAlt:
      "https://twitter.com/odeiootaco/status/1790903552442761547/photo/1",
  },
];

export async function GET(request: NextRequest) {
  // const experiencias = await getDoc(doc(firestore, "experiencias"));
  const user = request.nextUrl.searchParams.get("user");
  return NextResponse.json(EXPERIENCIAS.filter((exp) => exp.owner_id === user));
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const body = CreateExperienciaDto.parse(req);
  // const experiencia = await addDoc(collection(firestore, "experiencias"), body);
  EXPERIENCIAS.push({ id: randomUUID(), ...body });
  return NextResponse.json(EXPERIENCIAS);
}
