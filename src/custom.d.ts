type RootState = {
    recordList: RecordItem[],
    createTagError: Error | null,
    tagList: Tag[],
    currentTag?: Tag,
}
type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?: string
}

type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}

interface Window {
    // store:{
    //     tagList: Tag[];
    //     createTag: (name: string) => void;
    //     findTag: (id: string) => Tag;
    //     removeTag: (id: string) => boolean;
    //     updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    //     // updateTag: TagListModel['update']
    //     recordList: RecordItem[];
    //     createRecord: (record: RecordItem) => void;
    // }
}