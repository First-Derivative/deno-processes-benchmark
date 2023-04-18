const file_path = 'intro-write.txt'
// Write to file async non-blocking
await Deno.writeTextFile(file_path, 'Writing text is simple.');