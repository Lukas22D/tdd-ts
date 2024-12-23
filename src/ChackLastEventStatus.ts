import LoadLastEventRepository from "./LoadLastEventRepository";

export default class ChackLastEventStatus{

    constructor(private readonly loadLastEventRepository: LoadLastEventRepository){}

    async perform({ groupId }: { groupId: string}): Promise<string> {
        const event = await this.loadLastEventRepository.loadlastEvent({groupId: groupId});
        if (event === undefined) return 'done';
        const now = new Date();
        return event.endDate > now ? 'active' : 'inReview';

    };
}