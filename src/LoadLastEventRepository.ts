export default interface LoadLastEventRepository {
    
    loadlastEvent: ( input : { groupId: string}) => Promise<{endDate: Date} | undefined>;
}

