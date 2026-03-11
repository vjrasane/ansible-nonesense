_default:
    @just --list --justfile {{ justfile() }}

generate *args: 
    python3 packages/codegen/codegen.py {{args}}
