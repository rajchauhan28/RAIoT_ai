#!/bin/bash

# Setup script for RAIDoT_ai project using uv

echo "Setting up RAIDoT_ai environment with uv..."

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "uv is not installed. Installing uv..."
    pip install uv
fi

# Create and activate a new virtual environment using uv
uv venv

# Activate the virtual environment
source .venv/bin/activate

# Install project dependencies using uv
uv pip install -e .

echo "Environment setup complete!"
echo ""
echo "To activate the environment in the future, run:"
echo "  source .venv/bin/activate"
echo ""
echo "To run the project:"
echo "  python -m your_main_script"