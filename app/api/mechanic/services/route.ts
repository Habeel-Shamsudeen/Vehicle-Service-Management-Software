// api to get the services of the logged in mechanic (GET)
// api to update the progress of the service state like cost, status and completion date (POST)

import prisma from "@/db";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
const session = await getServerSession(authOptions)
  if(!session || !session.user || session.user.role!=='MECHANIC'){
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const userId = parseInt(session.user.id);
  try {
    const services = await prisma.service.findMany({
        where:{
            mechanic:{
                userId:userId
            }
        },
      include: {
        mechanic: {
          include: {
            user: true,
          },
        },
        customer: {
          include: {
            user: true,
          },
        },
        vehicle: true,
      },
    });
    return NextResponse.json(
      {
        msg: "Services fetched",
        status: "success",
        services,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      {
        msg: "Internal server error",
      },
      { status: 500 }
    );
  }
}
