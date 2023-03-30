import { invoke } from '@tauri-apps/api/tauri';

export class CrossProcessHandler {
	public async invokeGreeting(name: string): Promise<string> {
		return await invoke('greet', { name });
	}
}
