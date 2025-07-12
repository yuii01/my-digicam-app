import * as FileSystem from "expo-file-system";

const PHOTO_DIR = FileSystem.documentDirectory + "/photos/";

export async function savePhoto(uri, filename){
    const path = PHOTO_DIR + filename;
    try {
        await FileSystem.copyAsync();
        return true;
    } catch {
        console.error("Failed to save photo: ", error);
        return false;
    }

}

export async function deletePhoto(filename){
    const path = PHOTO_DIR + filename;
    try {
        await FileSystem.deleteAsync(path);
        return true;
    } catch {
        console.error("Failed to delete photo: ", error);
        return false;
    }
    
}

// export async function downloadPhoto(filename){
    
// }

// export async function importPhoto(){


// }

// export async function exportPhoto(){

// }