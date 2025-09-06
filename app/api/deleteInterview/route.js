import { db } from "@/utils/db";
import { interviews } from "@/utils/schema";
import { eq } from "drizzle-orm";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
  }

  try {
    await db.delete(interviews).where(eq(interviews.id, id));
    return new Response(JSON.stringify({ message: "Interview deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Delete failed", details: error.message }), {
      status: 500,
    });
  }
}
