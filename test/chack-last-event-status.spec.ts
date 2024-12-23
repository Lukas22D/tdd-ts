import ChackLastEventStatus from "../src/ChackLastEventStatus";
import LoadLastEventRepository from "../src/LoadLastEventRepository";

class LoadLastEventRepositoryMock implements LoadLastEventRepository{
    groupId?: string;

    async loadlastEvent(groupId: string): Promise<void> {
        this.groupId = groupId;
    }
}


describe('ChackLastEventStatus', () => {
    it('should get last event data', async () => {
        const loadLastEventRepository = new LoadLastEventRepositoryMock();
        const chackLastEventStatus = new ChackLastEventStatus(loadLastEventRepository);

        await chackLastEventStatus.perform('any_grup_id');

        expect(loadLastEventRepository.groupId).toBe('any_grup_id');
    });

    
});