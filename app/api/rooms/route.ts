import dbConnect from '@/app/backend/config/dbConnext';
import { allRooms } from '@/app/backend/controllers/roomControlers';
import { createEdgeRouter } from 'next-connect';
import { NextRequest } from 'next/server';

interface RequestContext {
    params: {
    id: string;
 }
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);

export async function GET(req: NextRequest, ctx: RequestContext) {
    return router.run(req, ctx);
}
