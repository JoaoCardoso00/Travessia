import { firestore } from "@/lib/firebase";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { EXPERIENCIAS } from "../route";

const UpdateExperienciaDto = z.object({
  name: z.string().nonempty().optional(),
  price: z.number().positive().int().optional(),
  tag: z.array(z.string()).nonempty().optional(),
  description: z.string().nonempty().optional(),
  owner_id: z.string().nonempty().optional(),
  imageSrc: z.string().optional(),
  imageAlt: z.string().optional(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  // const experiencia = await getDoc(doc(firestore, "experiencias", id));
  // return NextResponse.json(experiencia.data());
  const experiencia = EXPERIENCIAS.find((exp) => exp.id === id);
  if (!experiencia) {
    return NextResponse.json(
      { message: "Experiencia not found" },
      { status: 404 },
    );
  }
  return NextResponse.json(experiencia);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = UpdateExperienciaDto.parse(request.body);
  // const experiencia = await setDoc(doc(firestore, "experiencias", id), body);
  // return NextResponse.json(experiencia);
  const experiencia = EXPERIENCIAS.find((exp) => exp.id === id);
  if (!experiencia) {
    return NextResponse.json(
      { message: "Experiencia not found" },
      { status: 404 },
    );
  }
  Object.assign(experiencia, body);
  return NextResponse.json(experiencia);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  // await deleteDoc(doc(firestore, "experiencias", id));
  // return NextResponse.json({ message: "Experiencia deleted" });
  const index = EXPERIENCIAS.findIndex((exp) => exp.id === id);
  if (index === -1) {
    return NextResponse.json(
      { message: "Experiencia not found" },
      { status: 404 },
    );
  }
  EXPERIENCIAS.splice(index, 1);
  return NextResponse.json({ message: "Experiencia deleted" });
}
