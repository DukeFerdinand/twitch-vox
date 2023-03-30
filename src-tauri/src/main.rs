#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn get_time() -> String {
  let now = chrono::Local::now();
  now.format("%D %H:%M:%S").to_string()
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello {} {}!", name, get_time())
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
