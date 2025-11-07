<<<<<<< HEAD
# sphinx-hackathon
aditya first commit
soyal second commit
=======
# RAIDoT AI

AI-powered security orchestration platform

## Setup

To set up the development environment, run the following commands:

```bash
# Make sure you have uv installed
pip install uv

# Run the setup script to create the virtual environment
./setup_env.sh
```

## Activating the Environment

To activate the virtual environment in the future:

```bash
source .venv/bin/activate
```

## Running the Project

After activating the environment, you can run the project:

```bash
# For development
python -m your_main_script

# Or using uv
uv run python your_main_script.py
```

## Updating Dependencies

If you need to add new dependencies, update the `pyproject.toml` file and then run:

```bash
source .venv/bin/activate
uv pip install -e .
```
>>>>>>> 92d81d3c9712ec6ceab1ce59196f5a0d8d7e4855
