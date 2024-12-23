import ChackLastEventStatus from "../src/ChackLastEventStatus";
import LoadLastEventRepository from "../src/LoadLastEventRepository";
import {set, reset} from 'mockdate';
class LoadLastEventRepositoryMock implements LoadLastEventRepository{
    groupId?: string;
    output?: { endDate: Date };

    async loadlastEvent({ groupId }: { groupId: string}): Promise< { endDate: Date }|undefined> {
        this.groupId = groupId;
        return this.output;
    }
}

type SutOutput = { sut: ChackLastEventStatus, loadLastEventRepository: LoadLastEventRepositoryMock };

const makeSut = (): SutOutput => {
    const loadLastEventRepository = new LoadLastEventRepositoryMock();
    const sut = new ChackLastEventStatus(loadLastEventRepository);
    return {sut, loadLastEventRepository};
}


describe('ChackLastEventStatus', () => {
    beforeAll(() => {
        set(new Date());
    });

    afterAll(() => {
        reset();
    });


    it('should get last event data', async () => {
        const {sut, loadLastEventRepository} = makeSut();

        await sut.perform({ groupId: 'any_grup_id'});

        expect(loadLastEventRepository.groupId).toBe ('any_grup_id');
    });

    it('should return status done when group has no event', async () => {

        const {sut, loadLastEventRepository} = makeSut();

        loadLastEventRepository.output = undefined;
        const status = await sut.perform({ groupId: 'any_grup_id'});

        expect(status).toBe('done');
    });

    it('should return status active when now is  before event end time', async () => {

        const {sut, loadLastEventRepository} = makeSut();

        loadLastEventRepository.output = {
            endDate: new Date(new Date().getTime() + 1)
        };
        const status = await sut.perform({ groupId: 'any_grup_id'});

        expect(status).toBe('active');
    });
});

