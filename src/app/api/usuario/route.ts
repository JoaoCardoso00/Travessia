import { firestore } from "@/lib/firebase";
import { getDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const BodyData = z.object({
  owner_id: z.string().nonempty(),
});

export async function GET(request: NextRequest) {
  const body = BodyData.parse(request.body);
  const experiencias = await getDoc(
    doc(firestore, "experiencias", body.owner_id),
  );

  return NextResponse.json(experiencias.data());
}
