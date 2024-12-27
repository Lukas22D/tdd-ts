import LoadLastEventRepository from "./LoadLastEventRepository";

export default class ChackLastEventStatus{

    constructor(private readonly loadLastEventRepository: LoadLastEventRepository){}

    async perform({ groupId }: { groupId: string}): Promise<EventStatus> {
        const event = await this.loadLastEventRepository.loadlastEvent({groupId: groupId});
        if (event === undefined) return {status: 'done'};
        const now = new Date();
        return event.endDate > now ? {status: 'active'} : {status:'inReview'};

    };
}

type EventStatus = {status: string};