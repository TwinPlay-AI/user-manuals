# Run yarn commands in the website directory
yarn *args:
    yarn {{args}}

# Setup the project
setup:
    just yarn install

# Start development server
dev:
    just yarn "start --host 0.0.0.0"

# Build the project
build:
    just yarn install
    just yarn build
